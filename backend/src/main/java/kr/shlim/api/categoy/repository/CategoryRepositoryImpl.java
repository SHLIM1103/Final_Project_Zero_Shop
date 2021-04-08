package kr.shlim.api.categoy.repository;

import kr.shlim.api.categoy.domain.Category;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

@Repository
public class CategoryRepositoryImpl extends QuerydslRepositorySupport implements ICategoryRepository {
	public CategoryRepositoryImpl() {
		super(Category.class);
	}
}