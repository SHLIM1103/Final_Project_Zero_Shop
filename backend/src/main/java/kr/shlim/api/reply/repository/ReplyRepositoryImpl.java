package kr.shlim.api.reply.repository;

import kr.shlim.api.reply.domain.Reply;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

import com.querydsl.jpa.impl.JPAQueryFactory;

@Repository
public class ReplyRepositoryImpl extends QuerydslRepositorySupport 
									implements IReplyRepository{
	// private final JPAQueryFactory qf;
	public ReplyRepositoryImpl() {
		super(Reply.class);
		// this.qf = qf;
	}

}
