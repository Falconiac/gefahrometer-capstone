package de.neuefische.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "evaluation")
public class Evaluation {

    @Id
    private String id;

    private String category;
    private Integer inCategoryNum ;
    private String categoryImg;
    private String title;
    private String txtBlock;
    private String subTxt;
    private String subListItem1;
    private String subListItem2;
    private String subListItem3;
    private String subListItem4;
    private String subListItem5;
    private boolean done = false;
    private String respPerson;
    private String doneTil;
    private String controlDone;
    private boolean control = false;
    private String comments;
}
