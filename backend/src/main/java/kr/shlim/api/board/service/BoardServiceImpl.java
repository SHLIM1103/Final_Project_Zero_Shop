package kr.shlim.api.board.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Comparator;
import java.util.List; 
import java.util.Optional;
import java.util.stream.Collectors;

import kr.shlim.api.board.domain.Board;
import kr.shlim.api.board.domain.BoardDto;
import kr.shlim.api.board.repository.BoardRepository;
import kr.shlim.api.common.service.AbstractService;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BoardServiceImpl extends AbstractService<Board> implements BoardService {
	private final BoardRepository repo;
	
	@Override public long count() { return (long)repo.count(); }
	@Override public Board getOne(long id) { return repo.getOne(id); }
	@Override public Optional<Board> findById(long id) { return repo.findById(id); }
	@Override public boolean existsById(long id) { return repo.existsById(id); }
	@Override public Board findByTitle(String brdTitle) { return repo.findByTitle(brdTitle); }
	@Override public long delete(Board t) { repo.delete(t); return (getOne(t.getBrdNo()) == null) ? 1 : 0; }
	@Override public List<Board> findAll() {
		return repo.findAll().stream().sorted(Comparator.comparing(Board::getBrdWrtDate).reversed()).collect(Collectors.toList());
	}
	@Override public long save(Board t) {
		String date = String.format("%s %s", LocalDate.now(), LocalDateTime.now().format(DateTimeFormatter.ofPattern("a HH시 mm분")));
		t.setBrdWrtDate(date);
		return (repo.save(t) != null) ? 1 : 0;
	}
	public Board findByBrd(Board board) { return repo.findByBrd(board); }
	public List<Board> search(String brdTitle) { return repo.search(brdTitle); }
	public List<Board> blogListAll() { return repo.blogListAll(); }
	public long update(BoardDto dto) {
		Board map = findById(dto.getBrdNo()).get();
		map.setBrdTitle(dto.getBrdTitle());
		map.setBrdContent(dto.getBrdContent());
		return repo.save(map)==null? 1:0;
	}
}