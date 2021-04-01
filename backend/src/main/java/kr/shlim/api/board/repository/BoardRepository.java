package kr.shlim.api.board.repository;

import java.util.List;

import kr.shlim.api.board.domain.Board;
import kr.shlim.api.board.domain.BoardDto;

import org.springframework.data.jpa.repository.JpaRepository;

interface IBoardRepository {
	public Board findByTitle(String brdTitle);
	public Board findByBrd(Board brdNo);
	public List<Board> search(String brdTitle);
	public List<Board> blogListAll();
	public long update(Board brd, BoardDto t);
}

public interface BoardRepository extends JpaRepository<Board, Long>, IBoardRepository { }