package kr.shlim.api.board.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QBoard is a Querydsl query type for Board
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QBoard extends EntityPathBase<Board> {

    private static final long serialVersionUID = 906964434L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QBoard board = new QBoard("board");

    public final StringPath brdContent = createString("brdContent");

    public final NumberPath<Long> brdCount = createNumber("brdCount", Long.class);

    public final StringPath brdImg = createString("brdImg");

    public final NumberPath<Long> brdKind = createNumber("brdKind", Long.class);

    public final StringPath brdLike = createString("brdLike");

    public final NumberPath<Long> brdNo = createNumber("brdNo", Long.class);

    public final StringPath brdPwd = createString("brdPwd");

    public final StringPath brdRank = createString("brdRank");

    public final StringPath brdTitle = createString("brdTitle");

    public final StringPath brdWrtDate = createString("brdWrtDate");

    public final kr.shlim.api.payment.domain.QPayment payment;

    public final kr.shlim.api.product.domain.QProduct product;

    public final ListPath<kr.shlim.api.reply.domain.Reply, kr.shlim.api.reply.domain.QReply> replies = this.<kr.shlim.api.reply.domain.Reply, kr.shlim.api.reply.domain.QReply>createList("replies", kr.shlim.api.reply.domain.Reply.class, kr.shlim.api.reply.domain.QReply.class, PathInits.DIRECT2);

    public final kr.shlim.api.user.domain.QUserVo user;

    public final StringPath usrNikcname = createString("usrNikcname");

    public QBoard(String variable) {
        this(Board.class, forVariable(variable), INITS);
    }

    public QBoard(Path<? extends Board> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QBoard(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QBoard(PathMetadata metadata, PathInits inits) {
        this(Board.class, metadata, inits);
    }

    public QBoard(Class<? extends Board> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.payment = inits.isInitialized("payment") ? new kr.shlim.api.payment.domain.QPayment(forProperty("payment"), inits.get("payment")) : null;
        this.product = inits.isInitialized("product") ? new kr.shlim.api.product.domain.QProduct(forProperty("product"), inits.get("product")) : null;
        this.user = inits.isInitialized("user") ? new kr.shlim.api.user.domain.QUserVo(forProperty("user"), inits.get("user")) : null;
    }

}

