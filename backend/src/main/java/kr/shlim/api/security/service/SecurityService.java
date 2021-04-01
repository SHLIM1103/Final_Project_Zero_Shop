package kr.shlim.api.security.service;

public interface SecurityService<T> {
    boolean validate();
    T getData();
}