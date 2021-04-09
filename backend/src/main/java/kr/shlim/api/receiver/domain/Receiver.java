package kr.shlim.api.receiver.domain;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import kr.shlim.api.payment.domain.Payment;

import lombok.Getter;

@Entity @Getter
@Table(name = "receivers")
public class Receiver {
      @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
      @Column(name="rcv_no") private long rcvNo;
      @Column(name="rcv_name") private String rcvName;
      @Column(name="rcv_phone") private String rcvPhone;
      @Column(name="rcv_addr") private String rcvAddr;
      @Column(name="imp_uid") private String impUid;

      @JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class)
      @ManyToOne
      @JoinColumn(name="pay_no")
      private Payment payment;
}