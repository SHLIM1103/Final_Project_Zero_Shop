package kr.shlim.api.user.domain;

import io.swagger.annotations.ApiModelProperty;

import java.util.*;
import javax.validation.constraints.Size;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
import lombok.NoArgsConstructor;

@Component @Data @Lazy
@NoArgsConstructor
public class UserDto {
	private static final long serialVersionUID = 1L;
	private Long usrNo;
	private String usrEmail, password, usrAges, usrCity, usrGender, usrPhone, usrAddr, usrNickname, username, usrName;

	@ApiModelProperty(position = 3) List<Role> roles;

	public UserDto(String usrEmail, String usrNickname) {
		this.usrEmail = usrEmail;
		this.usrNickname = usrNickname;
	}

	public boolean equals(Object o) {
		if(this == o)
			return true;
		if(o == null || getClass() != o.getClass())
			return false;
		UserDto that = (UserDto) o;
		return Objects.equals(usrNo, that.usrNo);
	}

	@Override
	public int hashCode() {
		return Objects.hash(usrNo);
	}
}