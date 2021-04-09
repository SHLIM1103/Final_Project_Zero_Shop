package kr.shlim.api.category.repository;

import kr.shlim.api.category.domain.Category;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

@Repository
public class CategoryRepositoryImpl extends QuerydslRepositorySupport implements ICategoryRepository {
	public CategoryRepositoryImpl() {
		super(Category.class);
	}
}