package kr.shlim.api.reply.service;

import kr.shlim.api.reply.domain.Reply;
import kr.shlim.api.reply.domain.ReplyDto;

public interface ReplyService {
    Reply findByRpl(Reply rplNo);
    long update(ReplyDto t);
}