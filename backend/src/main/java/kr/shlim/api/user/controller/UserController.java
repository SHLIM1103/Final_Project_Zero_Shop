package kr.shlim.api.user.controller;

import java.util.List;
import java.util.Optional;

import kr.shlim.api.user.domain.UserVo;
import kr.shlim.api.user.repository.UserRepository;
import kr.shlim.api.user.service.UserServiceImpl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/usr")
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
public class UserController {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	private final UserRepository userRepository;
	private final UserServiceImpl userService;
	
//	@PostMapping("/user/sendSignUpEmail")
//	public String sendSignUpEmail(@ModelAttribute @Valid Account account, BindingResult errors, Model model) throws DuplicateEmailException, SendEmailException{
//        if (errors.hasErrors()) {
//            Map<String, String> validatorResult = accountSecurityService.validateHandling(errors);
//            for (String key : validatorResult.keySet()) {
//                model.addAttribute(key, validatorResult.get(key));
//            }
//            return "/user/register";
//        }

	@PostMapping("/save")
	public ResponseEntity<Long> save(@RequestBody UserVo user) {
		logger.info("User Register: " + user.toString());
		return ResponseEntity.ok(userService.save(user));
	}

	@PostMapping("/login")
	public ResponseEntity<Long> login(@RequestBody UserVo user) {
		logger.info("Login user" + user.toString());
		return ResponseEntity.ok(userService.login(user));
	}

	@GetMapping("/find/{name}")
	public ResponseEntity<List<UserVo>> findByName(@RequestBody UserVo user) {
		logger.info("Find user by name: " + user.getUsrName());
		return ResponseEntity.ok(userService.findUsersByName(user.getUsrName()));
	}

//	// 2.Read(3) - 비밀번호 찾기(로그인 시)
//	@GetMapping("/find/{password}")
//	public ResponseEntity<Optional<User>> findPassword(@RequestBody User user) {
//		logger.info("Find password:" + user.toString());
//		return ResponseEntity.ok(userService.findPassword(user.getUsrPwd()));
//	}

	@GetMapping("/all")
	public ResponseEntity<List<UserVo>> findAll() {
		logger.info("Find all users.");
		return ResponseEntity.ok(userService.findAll());
	}

	@PostMapping("/update/profile")
	public ResponseEntity<Optional<UserVo>> updateProfile(@RequestBody UserVo user) {
		logger.info("Update user profile: " + user.toString());
		return ResponseEntity.ok(userService.updateProfile(user));
	}
	
	@PostMapping("/update/password")
	public ResponseEntity<Optional<UserVo>> updatePassword(@RequestBody UserVo user) {
		logger.info("Update user profile: " + user.toString());
		return ResponseEntity.ok(userService.updateProfile(user));
	}
	
	@DeleteMapping("/delete")
	public ResponseEntity<Long> delete(@RequestBody UserVo user) {
		logger.info("Delete user :" + user.toString());
		return ResponseEntity.ok(userService.delete(user));
	}

	@GetMapping("/one/{id}")
	public ResponseEntity<UserVo> getOne(@PathVariable long id) {
		return ResponseEntity.ok(userService.getOne(id));
	}

//	@GetMapping("/check/findPw")
//	public @ResponseBody Map<String, Boolean> passwordFind(@RequestBody User user) {
//		Map<String, Boolean> map = new HashMap<>();
//		boolean userCheck = userService.userEmailCheck(user.getUsrEmail(), user.getUsrName());
//		logger.info("Match(Email, Name) : " + userCheck);
//		map.put("check", userCheck);
//		return map;
//	}

	@GetMapping("/count")
	public ResponseEntity<Long> count() {
		logger.info("Query total count.");
		return ResponseEntity.ok(userService.count());
	}
	
	public ResponseEntity<Optional<UserVo>> findById(long id) { return null; }

	public ResponseEntity<Boolean> existsById(long id) { return null; }

}