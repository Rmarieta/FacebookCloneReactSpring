package com.rmarieta.backend.service;

import com.rmarieta.backend.model.Post;

import java.util.List;

public interface PostService {
    Post addPost(Post post) throws Exception;

    List<Post> getPost();
}