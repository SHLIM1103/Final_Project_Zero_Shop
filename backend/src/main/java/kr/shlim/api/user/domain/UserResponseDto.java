package kr.shlim.api.user.domain;

import io.swagger.annotations.ApiModelProperty;

import java.util.List;

import lombok.Data;

@Data
public class UserResponseDto {
    @ApiModelProperty(position = 0)
    private Integer usrNo;
    @ApiModelProperty(position = 1)
    private String username;
    @ApiModelProperty(position = 2)
    private String usrEmail;
    @ApiModelProperty(position = 3)
    List<Role> roles;
}