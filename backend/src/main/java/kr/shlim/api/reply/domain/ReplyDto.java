package kr.shlim.api.reply.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data @Lazy
public class ReplyDto {
	private long rplNo, brdNo;
	private String rplContent, boardNo;
}