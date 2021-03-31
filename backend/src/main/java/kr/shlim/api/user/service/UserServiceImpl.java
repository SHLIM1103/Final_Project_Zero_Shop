package kr.shlim.api.user.service;

import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import kr.shlim.api.user.domain.UserVo;
import kr.shlim.api.user.domain.UserDto;
import kr.shlim.api.user.repository.UserRepository;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {
	private final UserRepository userRepository;

	public long save(UserVo user) {
		return userRepository.save(user) != null ? 1 : 0;
	}

	public boolean checkDuplicateId(String userId) {
		if (userId != null) {
			return userRepository.checkId(userId);
		}
		return false;
	}

	public boolean checkDuplicateEmail(String userId) {
		if (userId != null) {
			return userRepository.findByEmail(userId);
		}
		return false;
	}

	public long login(UserVo user) { return 3; }

	public List<UserVo> findUsersByName(String name) {
		return userRepository.findByName(name);
	}

	public String findIdByEmail(String userEmail) {
		if (userEmail != null) {
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
		return userRepository.updateProfile(user.getUsrEmail(), user.getUsrPwd());
	}

	public long delete(UserVo user) {
		userRepository.delete(user);
		return getOne(user.getUsrNo()) != null ? 1 : 0;
	}
	
	/**
	 * 
	 *  회원가입 Logic
	 *  
	 * */
	
//	@Override
//	public boolean idFormatCheck(String id) {
//		String reg = "^[a-zA-Z0-9][\\w]{7,17}$";
//		return Pattern.compile(reg).matcher(id).matches();
//	}
//	
//	@Override
//	public boolean mailFormatCheck(String email) {
//		String reg = "^[a-zA-Z0-9]*[\\w-]{4,17}$";
//		return Pattern.compile(reg).matcher(email).matches() ? true : false;
//	}
//
//	@Override
//	public boolean nickNameFormatCheck(String nickName) {
//		String reg = "^[\\w가-힣]{2,15}$";
//		return Pattern.compile(reg).matcher(nickName).matches() ? true : false;
//	}

//	@Override
//	public boolean phoneFormatCheck(String phone) {
//		String reg = "[^0-9a-zA-Z])(01[0|1|6|7|8|9][\\s-:\\.]?)(\\d{3,4}[\\s-:\\.]?)(\\d{4})(?=[^0-9a-zA-Z])$";
//		return Pattern.compile(reg).matcher(phone).matches() ? true : false;
//	}

//	@Override
//	public boolean nameFormatCheck(String usrName) {
//		String reg = "^[a-zA-Z가-힣]{2,12}$";
//		return Pattern.compile(reg).matcher(usrName).matches() ? true : false;
//	}
	public Map<?, ?> userDetail(UserDto usrDto) {
		var map = new HashMap<>();
		return map;
	}

	
	public UserDto create(UserDto user) { return null; }
	public UserVo getOne(long id) { return userRepository.getOne(id); }
	public boolean idCheck(UserVo user) { return false; }


//	public boolean swearFilter(String word) {
//		if (word != null) {
//			String reg = String.format("^[\\w가-힣\\s]*%s[\\s\\w가-힣\\s]*$", word);
//			return Swear.KOREAN_SWEAR_LIST.getSwearList().stream()
//					.anyMatch(x -> Pattern.compile(reg).matcher(word).matches());
//		}
//		return false;
//	}

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

}