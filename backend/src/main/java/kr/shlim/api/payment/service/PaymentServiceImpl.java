package kr.shlim.api.payment.service;

import kr.shlim.api.common.service.AbstractService;
import kr.shlim.api.payment.domain.Payment;
import kr.shlim.api.payment.repository.PaymentRepository;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl extends AbstractService<Payment> implements PaymentService {
	private final PaymentRepository repo;

	@Override public long save(Payment t) {return (repo.save(t)!=null) ? 1 : 0 ;}
	@Override public long count() {return (long) repo.count();}
	@Override public Payment getOne(long id) {return repo.getOne(id);}
	@Override public Optional<Payment> findById(long id) {return repo.findById(id);}
	@Override public boolean existsById(long id) {return repo.existsById(id);}
	@Override public List<Payment> findAll() {return repo.findAll();}
	@Override public long delete(Payment t) {
		repo.delete(t); 
		return (getOne(t.getPayNo())==null) ? 1 : 0;
	}
}
