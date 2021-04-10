package kr.shlim.api.reply.controller;

import java.util.List;
import java.util.Optional;

import kr.shlim.api.reply.domain.Reply;
import kr.shlim.api.reply.domain.ReplyDto;
import kr.shlim.api.reply.service.ReplyServiceImpl;
import kr.shlim.api.common.controller.AbstractController;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/reply")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ReplyController extends AbstractController<Reply> {
	private final ReplyServiceImpl service;
	
	@PostMapping("/save")
	public ResponseEntity<Long> save(@RequestBody Reply t) {
		return ResponseEntity.ok(service.save(t));
	}

	@DeleteMapping("/delete/{rplNo}")
	public ResponseEntity<Long> delete(@PathVariable Reply rplNo) {
		System.out.println("삭제한 댓글 번호: " + rplNo);
		return ResponseEntity.ok(service.delete(rplNo));
	}

	@GetMapping("/count")
	public ResponseEntity<Long> count() {
		return ResponseEntity.ok(service.count());
	}

	@GetMapping("/all")
	public ResponseEntity<List<Reply>> findAll() {
		return ResponseEntity.ok(service.findAll());
	}

	@GetMapping("/one/{id}")
	public ResponseEntity<Reply> getOne(@PathVariable long id) {
		return ResponseEntity.ok(service.getOne(id));
	}

	@GetMapping("/find/{id}")
	public ResponseEntity<Optional<Reply>> findById(@PathVariable long id) {
		return ResponseEntity.ok(service.findById(id));
	}

	@GetMapping("/select/{rplNo}")
	public ResponseEntity<Reply> findByRpl(@PathVariable Reply rplNo){
		System.out.println("선택한 댓글 번호: " + rplNo);
		return ResponseEntity.ok(service.findByRpl(rplNo));
	}

	@GetMapping("/exists/{rplNo}")
	public ResponseEntity<Boolean> existsById(@PathVariable long rplNo) {
		return ResponseEntity.ok(service.existsById(rplNo));
	}

	@PutMapping("/update/{rplNo}")
	public ResponseEntity<Long> update(@PathVariable long rplNo, @RequestBody ReplyDto t) {
		System.out.println("업데이트한 내용: " + t.toString());
		return ResponseEntity.ok(service.update(t));
	}
}