package kr.shlim.api.board.repository;

import java.util.List;

import kr.shlim.api.board.domain.Board;
import kr.shlim.api.board.domain.BoardDto;

import org.springframework.data.jpa.repository.JpaRepository;

interface IBoardRepository {
	List<Board> boardAll();
	List<Board> reviewAll();
	Board findByBrd(Board brdNo);
	List<Board> search(String brdTitle);
}

public interface BoardRepository extends JpaRepository<Board, Long>, IBoardRepository {}