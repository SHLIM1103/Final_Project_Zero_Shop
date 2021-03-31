package kr.shlim.api.user.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QUserVo is a Querydsl query type for UserVo
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QUserVo extends EntityPathBase<UserVo> {

    private static final long serialVersionUID = -1387667911L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QUserVo userVo = new QUserVo("userVo");

    public final kr.shlim.api.level.domain.QLevel level;

    public final ListPath<kr.shlim.api.payment.domain.Payment, kr.shlim.api.payment.domain.QPayment> payments = this.<kr.shlim.api.payment.domain.Payment, kr.shlim.api.payment.domain.QPayment>createList("payments", kr.shlim.api.payment.domain.Payment.class, kr.shlim.api.payment.domain.QPayment.class, PathInits.DIRECT2);

    public final StringPath usrAddr = createString("usrAddr");

    public final StringPath usrAges = createString("usrAges");

    public final StringPath usrCity = createString("usrCity");

    public final StringPath usrEmail = createString("usrEmail");

    public final StringPath usrGender = createString("usrGender");

    public final StringPath usrId = createString("usrId");

    public final StringPath usrName = createString("usrName");

    public final StringPath usrNickname = createString("usrNickname");

    public final NumberPath<Long> usrNo = createNumber("usrNo", Long.class);

    public final StringPath usrPhone = createString("usrPhone");

    public final StringPath usrPwd = createString("usrPwd");

    public QUserVo(String variable) {
        this(UserVo.class, forVariable(variable), INITS);
    }

    public QUserVo(Path<? extends UserVo> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QUserVo(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QUserVo(PathMetadata metadata, PathInits inits) {
        this(UserVo.class, metadata, inits);
    }

    public QUserVo(Class<? extends UserVo> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.level = inits.isInitialized("level") ? new kr.shlim.api.level.domain.QLevel(forProperty("level")) : null;
    }

}

