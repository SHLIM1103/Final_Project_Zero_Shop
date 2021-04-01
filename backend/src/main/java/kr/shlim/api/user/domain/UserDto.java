package kr.shlim.api.user.domain;

import java.util.*;

import io.swagger.annotations.ApiModelProperty;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Size;

@Component
@NoArgsConstructor
@Lazy @Getter @Setter
public class UserDto {
	private static final long serialVersionUID = 1L;

	private Long usrNo;
	@Size(min = 2, max = 8, message = "이름을 2~8자 사이로 입력해주세요.") private String usrName;
	private String usrEmail;
	private String password;
	private String usrAges;
	private String usrCity;
	private String usrGender;
	private String usrPhone;
	private String usrAddr;
	private String usrNickname;
	private String username;

	@ApiModelProperty(position = 3)
	List<Role> roles;

	public UserDto(String usrEmail, String usrNickname) {
		this.usrEmail = usrEmail;
		this.usrNickname = usrNickname;
	}

	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;
		UserDto that = (UserDto) o;
		return Objects.equals(usrNo, that.usrNo);
	}

	@Override
	public int hashCode() {
		return Objects.hash(usrNo);
	}

}