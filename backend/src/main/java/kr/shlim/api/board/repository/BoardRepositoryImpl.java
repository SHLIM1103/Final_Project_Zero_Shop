package kr.shlim.api.board.repository;

import static kr.shlim.api.board.domain.QBoard.board;

import java.util.List;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import kr.shlim.api.board.domain.Board;

import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

import com.querydsl.jpa.impl.JPAQueryFactory;

@Repository
public class BoardRepositoryImpl extends QuerydslRepositorySupport implements IBoardRepository{
	private final JPAQueryFactory qf;
	private final EntityManager em;

	public BoardRepositoryImpl(EntityManager em,JPAQueryFactory qf) {
		super(Board.class);
		this.qf = qf;
		this.em = em;
	}

	@Override
	public List<Board> boardAll() {
		return qf.selectFrom(board).where(board.brdKind.eq(1L)).orderBy(board.brdWrtDate.desc()).fetch();
	}

	@Override
	public List<Board> reviewAll() {
		return qf.selectFrom(board).where(board.brdKind.eq(2L)).orderBy(board.brdWrtDate.desc()).fetch();
	}

	@Transactional
	@Override
	public Board findByBrd(Board brd) {
		qf.update(board).set(board.brdCount, brd.getBrdCount()+1).where(board.brdNo.eq(brd.getBrdNo())).execute();
		return qf.selectFrom(board).where(board.brdNo.eq(brd.getBrdNo())).fetchOne();
	}

	@Override
	public List<Board> search(String brdTitle) {
		return qf.selectFrom(board).where(board.brdTitle.contains(brdTitle)).fetch();
	}

}