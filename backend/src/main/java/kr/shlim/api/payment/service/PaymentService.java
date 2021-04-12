package kr.shlim.api.payment.service;

import kr.shlim.api.payment.domain.Payment;

public interface PaymentService {
    long save(Payment t);
    String edit(Payment t);
    String delete(long id);
}
