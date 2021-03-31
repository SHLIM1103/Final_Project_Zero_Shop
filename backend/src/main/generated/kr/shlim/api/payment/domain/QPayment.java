package kr.shlim.api.payment.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QPayment is a Querydsl query type for Payment
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QPayment extends EntityPathBase<Payment> {

    private static final long serialVersionUID = 613837650L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QPayment payment = new QPayment("payment");

    public final ListPath<kr.shlim.api.board.domain.Board, kr.shlim.api.board.domain.QBoard> boards = this.<kr.shlim.api.board.domain.Board, kr.shlim.api.board.domain.QBoard>createList("boards", kr.shlim.api.board.domain.Board.class, kr.shlim.api.board.domain.QBoard.class, PathInits.DIRECT2);

    public final kr.shlim.api.cart.domain.QCart cart;

    public final StringPath dvrFee = createString("dvrFee");

    public final NumberPath<Long> payAmount = createNumber("payAmount", Long.class);

    public final StringPath payDate = createString("payDate");

    public final NumberPath<Long> payNo = createNumber("payNo", Long.class);

    public final StringPath payPrice = createString("payPrice");

    public final StringPath payState = createString("payState");

    public final kr.shlim.api.product.domain.QProduct product;

    public final ListPath<kr.shlim.api.receiver.domain.Receiver, kr.shlim.api.receiver.domain.QReceiver> receivers = this.<kr.shlim.api.receiver.domain.Receiver, kr.shlim.api.receiver.domain.QReceiver>createList("receivers", kr.shlim.api.receiver.domain.Receiver.class, kr.shlim.api.receiver.domain.QReceiver.class, PathInits.DIRECT2);

    public final kr.shlim.api.user.domain.QUserVo user;

    public QPayment(String variable) {
        this(Payment.class, forVariable(variable), INITS);
    }

    public QPayment(Path<? extends Payment> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QPayment(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QPayment(PathMetadata metadata, PathInits inits) {
        this(Payment.class, metadata, inits);
    }

    public QPayment(Class<? extends Payment> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.cart = inits.isInitialized("cart") ? new kr.shlim.api.cart.domain.QCart(forProperty("cart"), inits.get("cart")) : null;
        this.product = inits.isInitialized("product") ? new kr.shlim.api.product.domain.QProduct(forProperty("product"), inits.get("product")) : null;
        this.user = inits.isInitialized("user") ? new kr.shlim.api.user.domain.QUserVo(forProperty("user"), inits.get("user")) : null;
    }

}

