package kr.shlim.api.board.service;

import kr.shlim.api.board.domain.Board;

public interface BoardService {
	public Board findByTitle(String brdTitle);
}