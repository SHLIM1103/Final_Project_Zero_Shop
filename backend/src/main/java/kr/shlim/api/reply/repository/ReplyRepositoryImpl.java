package kr.shlim.api.reply.repository;

import static kr.shlim.api.reply.domain.QReply.reply;

import com.querydsl.jpa.impl.JPAQueryFactory;
import kr.shlim.api.reply.domain.Reply;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;

@Repository
public class ReplyRepositoryImpl extends QuerydslRepositorySupport implements IReplyRepository {
	private final JPAQueryFactory qf;
	private final EntityManager em;
	public ReplyRepositoryImpl(EntityManager em,JPAQueryFactory qf) {
		super(Reply.class);
		this.qf = qf;
		this.em = em;
	}
	@Override
	public Reply findByRpl(Reply rpl) {
		return qf.selectFrom(reply).where(reply.rplNo.eq(rpl.getRplNo())).fetchOne();
	}
}
