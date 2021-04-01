package kr.shlim.api.cart.repository;

import kr.shlim.api.cart.domain.Cart;

import org.springframework.data.jpa.repository.JpaRepository;

interface ICartRepository { }

public interface CartRepository extends JpaRepository<Cart, Long>, ICartRepository { }
