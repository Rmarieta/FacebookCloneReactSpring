package com.rmarieta.backend.model;

import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Post {

    private String id;

    private String post;
    private String name;
    @Lob
    private String image;
    @Lob
    private String file;
    private String profilePic;
    private String timeStamp;
}