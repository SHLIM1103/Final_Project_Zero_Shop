package kr.shlim.api.reply.repository;

import kr.shlim.api.reply.domain.Reply;

import org.springframework.data.jpa.repository.JpaRepository;

interface IReplyRepository {
    Reply findByRpl(Reply rplNo);
}

public interface ReplyRepository extends JpaRepository<Reply, Long>, IReplyRepository { }