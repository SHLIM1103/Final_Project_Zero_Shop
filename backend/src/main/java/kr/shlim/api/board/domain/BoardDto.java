package kr.shlim.api.board.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data @Lazy
public class BoardDto {
	 private long brdNo, brdKind, count;
	 private String brdTitle, brdContent, brdWrtDate, brdRank, brdImg, brdLike, brdPwd, usrName, usrNo;
}