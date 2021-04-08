package kr.shlim.api.categories.repository;

import kr.shlim.api.categories.domain.Categories;

import org.springframework.data.jpa.repository.JpaRepository;

interface ICategoriesRepository { }

public interface CategoriesRepository extends JpaRepository<Categories, Long>, ICategoriesRepository { }