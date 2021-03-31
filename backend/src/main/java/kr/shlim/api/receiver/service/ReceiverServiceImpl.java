package kr.shlim.api.receiver.service;

import java.util.List;
import java.util.Optional;

import kr.shlim.api.common.service.AbstractService;
import kr.shlim.api.receiver.domain.Receiver;
import kr.shlim.api.receiver.repository.ReceiverRepository;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ReceiverServiceImpl extends AbstractService<Receiver> implements ReceiverService {
	private final ReceiverRepository repo;

	@Override public long save(Receiver t) {return (repo.save(t)!=null) ? 1 : 0 ;}
	@Override public long count() {return (long) repo.count();}
	@Override public Receiver getOne(long id) {return repo.getOne(id);}
	@Override public Optional<Receiver> findById(long id) {return repo.findById(id);}
	@Override public boolean existsById(long id) {return repo.existsById(id);}
	@Override public List<Receiver> findAll() {return repo.findAll();}
	@Override public long delete(Receiver t) {
		repo.delete(t); 
		return (getOne(t.getRcvNo())==null) ? 1 : 0;
	}
}