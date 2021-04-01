package kr.shlim.api.common.domain;

import lombok.Builder;
import lombok.Getter;

@Getter @Builder
public class Messenger {
    private int status;
    private String code;
    private String message;
}