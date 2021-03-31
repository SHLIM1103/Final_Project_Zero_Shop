package kr.shlim.api.level.domain;

import lombok.Getter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity @Getter @Table(name="level")
public class Level {

	@Id
	@Column(name = "level", nullable=true)
	private int level;
}
