package kr.shlim.api.reply.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import kr.shlim.api.common.service.AbstractService;
import kr.shlim.api.reply.domain.Reply;
import kr.shlim.api.reply.domain.ReplyDto;
import kr.shlim.api.reply.repository.ReplyRepository;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ReplyServiceImpl extends AbstractService<Reply> implements ReplyService {
	private final ReplyRepository repo;

	@Override public long save(Reply t) {
		String date = String.format("%s %s", LocalDate.now(), LocalDateTime.now().format(DateTimeFormatter.ofPattern("a HH시 mm분")));
		t.setRplWrtDate(date);
		return (repo.save(t) != null) ? 1  : 0;
	}
	@Override public long count() { return (long) repo.count(); }
	@Override public Reply getOne(long id) { return repo.getOne(id); }
	@Override public Optional<Reply> findById(long id) { return repo.findById(id); }
	@Override public long delete(Reply t) { repo.delete(t); return (getOne(t.getRplNo())==null) ? 1 : 0; }
	@Override public boolean existsById(long id) { return repo.existsById(id); }
	@Override public List<Reply> findAll() {
		return repo.findAll().stream().sorted(Comparator.comparing(Reply::getRplWrtDate).reversed()).collect(Collectors.toList());
	}
	@Override public Reply findByRpl(Reply rplNo) { return repo.findByRpl(rplNo); }
	@Override public long update(ReplyDto t) { return 1; }
}