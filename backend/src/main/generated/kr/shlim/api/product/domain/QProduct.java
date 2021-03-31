package kr.shlim.api.product.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QProduct is a Querydsl query type for Product
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QProduct extends EntityPathBase<Product> {

    private static final long serialVersionUID = -1582162894L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QProduct product = new QProduct("product");

    public final kr.shlim.api.category.domain.QCategory category;

    public final StringPath ctgName = createString("ctgName");

    public final ListPath<kr.shlim.api.payment.domain.Payment, kr.shlim.api.payment.domain.QPayment> payments = this.<kr.shlim.api.payment.domain.Payment, kr.shlim.api.payment.domain.QPayment>createList("payments", kr.shlim.api.payment.domain.Payment.class, kr.shlim.api.payment.domain.QPayment.class, PathInits.DIRECT2);

    public final StringPath prdImg = createString("prdImg");

    public final StringPath prdInv = createString("prdInv");

    public final StringPath prdName = createString("prdName");

    public final NumberPath<Long> prdNo = createNumber("prdNo", Long.class);

    public final StringPath prdPrice = createString("prdPrice");

    public QProduct(String variable) {
        this(Product.class, forVariable(variable), INITS);
    }

    public QProduct(Path<? extends Product> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QProduct(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QProduct(PathMetadata metadata, PathInits inits) {
        this(Product.class, metadata, inits);
    }

    public QProduct(Class<? extends Product> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.category = inits.isInitialized("category") ? new kr.shlim.api.category.domain.QCategory(forProperty("category")) : null;
    }

}

