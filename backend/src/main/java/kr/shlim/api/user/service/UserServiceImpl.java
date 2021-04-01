package kr.shlim.api.user.service;

import java.util.*;
import java.util.stream.Collectors;
import javax.servlet.http.HttpServletRequest;

import kr.shlim.api.security.domain.SecurityProvider;
import kr.shlim.api.security.exception.SecurityRuntimeException;
import kr.shlim.api.user.domain.Role;
import kr.shlim.api.user.domain.UserVo;
import kr.shlim.api.user.domain.UserDto;
import kr.shlim.api.user.repository.UserRepository;

import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {
	private final UserRepository userRepository;
	private final PasswordEncoder passwordEncoder;
	private final SecurityProvider provider;

	public boolean checkDuplicateId(String userId) {
		if (userId != null) {
			return userRepository.checkId(userId);
		}
		return false;
	}

	public boolean checkDuplicateEmail(String userId) {
		if(userId != null) {
			return userRepository.findByEmail(userId);
		}
		return false;
	}

	public List<UserVo> findUsersByName(String name) {
		return userRepository.findByName(name);
	}

	public String findIdByEmail(String userEmail) {
		if(userEmail != null) {
			return userRepository.findIdByEmail(userEmail);
		}
		return "";
	}

	public List<UserVo> findAllUser() {
		return userRepository.findAllUser();
	}

	public List<UserVo> findAll() {
		return userRepository.findAll().stream().sorted(Comparator.comparing(UserVo::getUsrName).reversed())
				.collect(Collectors.toList());
	}

	public Optional<UserVo> updateProfile(UserVo user) {
		return userRepository.updateProfile(user.getUsrEmail(), user.getPassword());
	}

	public long delete(UserVo user) {
		userRepository.delete(user);
		return getOne(user.getUsrNo()) != null ? 1 : 0;
	}
	
	/* 회원가입 Logic */

	public UserDto create(UserDto user) { return null; }
	public UserVo getOne(long id) { return userRepository.getOne(id); }
	public boolean idCheck(UserVo user) { return false; }


	public boolean emailCheck(UserVo user) {
		return false;
	}

	public void updatePassword(String str, String userEmail) {
		
	}

	public String createTempPassword() {
		return null;
	}

	public long count() {
		return 0;
	}

	public Optional<UserVo> findById(long id) {
		return null;
	}

	public boolean existsById(long id) {
		return false;
	}

	/* Security Default Methods */
	@Override
	public String signin(String username, String password) {
		try {
			//	manager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
			System.out.println("ID:  " + username);
			String tok = provider.createToken(username, userRepository.findByUsername(username).getRoles());
			System.out.println("token :: " + tok);
			return tok;
		} catch (AuthenticationException e) {
			throw new SecurityRuntimeException("Invalid username/password supplied", HttpStatus.UNPROCESSABLE_ENTITY);
		}
	}
	@Override
	public String signup(UserVo user) {
		if(!userRepository.existsByUsername(user.getUsername())) {
			user.setPassword(passwordEncoder.encode(user.getPassword()));
			List<Role> list = new ArrayList<>();
			list.add(Role.USER);
			user.setRoles(list);
			userRepository.save(user);
			// 만약에 관리자 레벨도 있다면,
			// list.add(Role.ADMIN);
			return provider.createToken(user.getUsername(), user.getRoles());
		}else {
			throw new SecurityRuntimeException("Username is already in use", HttpStatus.UNPROCESSABLE_ENTITY);
		}
	}
	@Override
	public void delete(String username) {
		userRepository.deleteByUsername(username);
	}
	@Override
	public UserVo search(String username) {
		UserVo user = userRepository.findByUsername(username);
		if (user == null) {
			throw new SecurityRuntimeException("The user doesn't exist", HttpStatus.NOT_FOUND);
		}
		return user;
	}
	@Override
	public UserVo whoami(HttpServletRequest req) {
		return userRepository.findByUsername(provider.getUsername(provider.resolveToken(req)));
	}
	@Override
	public String refresh(String username) {
		return provider.createToken(username, userRepository.findByUsername(username).getRoles());
	}
}