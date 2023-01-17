package com.rmarieta.backend.service;

import com.rmarieta.backend.entity.PostEntity;
import com.rmarieta.backend.model.Post;
import com.rmarieta.backend.repository.PostEntityRepository;
import jakarta.persistence.Lob;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class PostServiceImpl implements PostService {

    private PostEntityRepository postEntityRepository;

    public PostServiceImpl(PostEntityRepository postEntityRepository) {
        this.postEntityRepository = postEntityRepository;
    }

    @Override
    public Post addPost(Post post) throws Exception {
        try {

            PostEntity postEntity = new PostEntity();

            if (post.getFile() != null && !post.getFile().equalsIgnoreCase("null")) {

                // convert image from base64 (String) to byte[]
                int dataStartIndex = post.getFile().indexOf(",") + 1;
                String data = post.getFile().substring(dataStartIndex);
                byte[] byteImage = Base64.getDecoder().decode(data);

                postEntity.setImage(byteImage);

            } else {
                postEntity.setImage(null);
            }

            // copy other properties

            postEntity.setPost(post.getPost());
            postEntity.setName(post.getName());
            postEntity.setProfilePic(post.getProfilePic());
            postEntity.setTimeStamp(post.getTimeStamp());

            postEntity = postEntityRepository.save(postEntity);


            // convert back
            if (postEntity.getImage() != null) {
                String s = Base64.getEncoder().encodeToString(postEntity.getImage());

                post.setImage("data:image/png;base64," + s);
            } else {
                post.setImage(null);
            }

            System.out.println("\nAFTER SAVING :\n"+post.getImage());

            post.setId(postEntity.getId());
            post.setFile(null);

        } catch (Exception e) {
            throw new Exception("Could not save Post: " + e);
        }
        return post;
    }

    @Override
    public List<Post> getPost() {
        List<PostEntity> postEntities
                = postEntityRepository.findAll();

        List<Post> posts;
        posts = postEntities.stream()
                .map((postEntity) ->
                        Post.builder()
                                .id(postEntity.getId())
                                .timeStamp(postEntity.getTimeStamp())
                                .name(postEntity.getName())
                                .post(postEntity.getPost())
                                .image(accessImage(postEntity.getImage()))
                                .profilePic(postEntity.getProfilePic())
                                .build()
                ).collect(Collectors.toList());
        posts.sort(Comparator.comparing(Post::getTimeStamp));
        Collections.reverse(posts);
        return posts;
    }

    private String accessImage(byte[] img) {
        if (img != null) {

            String s = Base64.getEncoder().encodeToString(img);

            return "data:image/png;base64," + s;
        } else {
            return null;
        }
    }


}