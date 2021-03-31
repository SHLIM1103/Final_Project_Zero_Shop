package kr.shlim.api.category.service;

import java.util.List;
import java.util.Optional;

import kr.shlim.api.category.domain.Category;
import kr.shlim.api.category.repository.CategoryRepository;
import kr.shlim.api.common.service.AbstractService;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service @RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {
	private final CategoryRepository repo;
	
	 public long save(Category t) { return (repo.save(t) != null) ? 1 : 0; }
	 public long count() { return (long)repo.count(); }
	 public Category getOne(long id) { return repo.getOne(id); }
	 public Optional<Category> findById(long id) { return repo.findById(id); }
	 public boolean existsById(long id) { return repo.existsById(id); }
	 public List<Category> findAll() { return repo.findAll(); }

	public long delete(Category t) {
		repo.delete(t);
		return (getOne(t.getCtgNo()) == null) ? 1 : 0;
	}
}