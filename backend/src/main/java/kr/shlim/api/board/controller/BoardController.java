package kr.shlim.api.board.controller;

import java.util.List;
import java.util.Optional;

import kr.shlim.api.board.domain.Board;
import kr.shlim.api.board.domain.BoardDto;
import kr.shlim.api.board.service.BoardServiceImpl;
import kr.shlim.api.common.controller.AbstractController;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/boards")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
public class BoardController extends AbstractController<Board> {
	private final BoardServiceImpl service;
	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@PostMapping("/save")
	public ResponseEntity<Long> save(@RequestBody Board brd) {
		logger.info("추가한 게시글: " + brd.toString());
		return ResponseEntity.ok(service.save(brd));
	}

	@DeleteMapping("/delete/{brdNo}")
	public ResponseEntity<Long> delete(@RequestBody Board brd) {
		logger.info("삭제한 게시글 번호: " + brd.getBrdNo());
		return ResponseEntity.ok(service.delete(brd));
	}

	@GetMapping("/count")
	public ResponseEntity<Long> count() {
		return ResponseEntity.ok(service.count());
	}

	@GetMapping("/all")
	public ResponseEntity<List<Board>> findAll() {
		logger.info("게시글 전체 조회");
		return ResponseEntity.ok(service.findAll());
	}

	@GetMapping("/board-all")
	public ResponseEntity<List<Board>> boardAll() {
		logger.info("게시글 종류별 전체 조회");
		return ResponseEntity.ok(service.boardAll());
	}

	@GetMapping("/review/all")
	public ResponseEntity<List<Board>> reviewAll() {
		logger.info("리뷰 전체 조회");
		return ResponseEntity.ok(service.reviewAll());
	}

	@GetMapping("/one/{brdNo}")
	public ResponseEntity<Board> getOne(@PathVariable long brdNo) {
		return ResponseEntity.ok(service.getOne(brdNo));
	}

	@GetMapping("/find/{brdNo}")
	public ResponseEntity<Optional<Board>> findById(@PathVariable long brdNo) {
		return ResponseEntity.ok(service.findById(brdNo));
	}

	@GetMapping("/exists/{brdNo}")
	public ResponseEntity<Boolean> existsById(@PathVariable long brdNo) {
		return ResponseEntity.ok(service.existsById(brdNo));
	}

	@GetMapping("/board-number/{brd}")
	public ResponseEntity<Board> findByBrd(@PathVariable Board brd) {
		logger.info("조회한 게시글 번호: " + brd.getBrdNo());
		return ResponseEntity.ok(service.findByBrd(brd));
	}

	@GetMapping("/search")
	public ResponseEntity<List<Board>> search(@PathVariable String brdTitle) {
		logger.info("검색한 키워드: " + brdTitle);
		return ResponseEntity.ok(service.search(brdTitle));
	}

	@PutMapping("/update/{brdNo}")
	public ResponseEntity<Long> update(@PathVariable long brdNo, @RequestBody BoardDto brd) {
		logger.info("수정한 게시글 번호: "+ brdNo);
		return ResponseEntity.ok(service.update(brd));
	}
}