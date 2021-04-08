package kr.shlim.api.product.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import kr.shlim.api.product.domain.Product;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.test.context.TestComponent;

import javax.persistence.EntityManager;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootApplication
class ProductRepositoryImplTest {
    private final EntityManager em;
    private final JPAQueryFactory qf;
    public ProductRepositoryImplTest(EntityManager em, JPAQueryFactory qf) {
        this.qf = qf;
        this.em = em;
    }
    @Autowired
    IProductRepository productRepository;



    @Test
    void 임소현() {

    }

//    @Test
//    void testee() throws {
//            //예외를 던질때
//    }

}