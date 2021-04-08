package kr.shlim.api.categoy.repository;

import kr.shlim.api.categoy.domain.Category;

import org.springframework.data.jpa.repository.JpaRepository;

interface ICategoryRepository { }

public interface CategoryRepository extends JpaRepository<Category, Long>, ICategoryRepository { }