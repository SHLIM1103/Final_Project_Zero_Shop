package kr.shlim.api.categoy.service;

import java.util.List;
import java.util.Optional;

import kr.shlim.api.categoy.domain.Category;
import kr.shlim.api.categoy.repository.CategoryRepository;
import kr.shlim.api.common.service.AbstractService;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CategoriesServiceImpl extends AbstractService<Category> implements CategoriesService {
	private final CategoryRepository repo;
	
	@Override public long save(Category t) { return (repo.save(t) != null) ? 1 : 0; }
	@Override public long count() { return (long)repo.count(); }
	@Override public Category getOne(long id) { return repo.getOne(id); }
	@Override public Optional<Category> findById(long id) { return repo.findById(id); }
	@Override public boolean existsById(long id) { return repo.existsById(id); }
	@Override public List<Category> findAll() { return repo.findAll(); }
	@Override public long delete(Category t) { repo.delete(t); return (getOne(t.getCtgNo()) == null) ? 1 : 0; }
}