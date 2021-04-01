package kr.shlim.api.user.service;

import kr.shlim.api.user.domain.UserVo;
import kr.shlim.api.user.domain.UserDto;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Optional;

public interface UserService {

	public boolean checkDuplicateId(String userId);
	public boolean checkDuplicateEmail(String userId);
	public List<UserVo> findUsersByName(String name);
	public List<UserVo> findAllUser();
	public String findIdByEmail(String userEmail);
	public UserDto create(UserDto user);
	
	public Optional<UserVo> updateProfile(UserVo user);
	
	public boolean emailCheck(UserVo user);
	public boolean idCheck(UserVo user);

	public void updatePassword(String str, String userEmail);
	public String createTempPassword();

	/* Security Default Methods */
	public String signin(String username, String password);
	public String signup(UserVo user);
	public void delete(String username);
	public UserVo search(String username);
	public UserVo whoami(HttpServletRequest req);
	public String refresh(String username);
}