package kr.shlim.api.payment.repository;

import kr.shlim.api.payment.domain.Payment;

import org.springframework.data.jpa.repository.JpaRepository;

interface PaymentCustomRepository { }

public interface PaymentRepository extends JpaRepository<Payment, Long>, PaymentCustomRepository { }