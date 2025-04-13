describe("Anasayfa yönlendirme testi", () => {
    it("Acıktım butonuna tıklanınca /siparis sayfasına yönlendirilir", () => {
      cy.visit("http://localhost:5173");
      cy.get('[data-cy="btn-aciktim"]').click();
      cy.url().should("include", "/siparis");
      cy.contains("Position Absolute Acı Pizza").should("be.visible");
    });
  });

  describe("Ürün Filtresi", () => {
    beforeEach(() => {
      cy.visit("http://localhost:5173"); 
    });
  
    it("Kategori değişince ürünler değişmeli", () => {
      let firstSet = [];
      cy.get('[data-cy="product-card"]').then(($cards) => {
        firstSet = [...$cards].map((el) => el.innerText);
      });
      cy.get("button").eq(1).click();
      cy.get('[data-cy="product-card"]').should(($newCards) => {
        const secondSet = [...$newCards].map((el) => el.innerText);
        expect(secondSet).to.not.deep.equal(firstSet);
      });
    });
  });
  
  

  describe("Sipariş Sayfası", () => {
    beforeEach(() => {
      cy.visit("http://localhost:5173/siparis");
    });
  
    it("Tüm form bileşenleri görüntüleniyor mu?", () => {
      cy.get('[data-cy="data-header"]').should("exist");
      cy.get('[data-cy="data-size"]').should("exist");
      cy.get('[data-cy="data-dough"]').should("exist");
      cy.get('[data-cy="data-Ingredients"]').should("exist");
      cy.get('[data-cy="data-name"]').should("exist");
      cy.get('[data-cy="data-note"]').should("exist");
      cy.get('[data-cy="data-submit"]').should("exist");
    });
  });

  describe("Form Validasyon Testleri", () => {
    beforeEach(() => {
      cy.visit("http://localhost:5173/siparis");
    });
  
    it("İsim 3 karakterden azsa hata verir", () => {
      cy.get('[data-cy="data-name"]').type("Al");
      cy.get('[data-cy="data-submit"]').click();
      cy.contains("İsim en az 3 karakter olmalı.").should("be.visible");
    });
  
    it("Boyut seçilmezse hata verir", () => {
      cy.get('[data-cy="data-submit"]').click();
      cy.contains("Lütfen boyut seçiniz.").should("be.visible");
    });
  
    it("Hamur seçilmezse hata verir", () => {
      cy.get('[data-cy="data-submit"]').click();
      cy.contains("Lütfen hamur seçiniz.").should("be.visible");
    });
  
    it("En az 4 malzeme seçilmezse hata verir", () => {
      cy.get('[data-cy="data-name"]').type("Ali");
      cy.get('[data-cy="data-size"]').find("input").first().check({ force: true });
      cy.get('[data-cy="data-dough"]').find("select").select("Orta");
      cy.get('[data-cy="data-label-check"]').contains("Pepperoni").click();
      cy.get('[data-cy="data-submit"]').click();
      cy.contains("En az 4 malzeme seçmelisiniz.").should("be.visible");
    });
  });

  describe("Maksimum Malzeme Seçimi Aşılıyor mu?", ()=>{
    it("En fazla 10 malzeme seçilebilmeli", () => {
        cy.visit("http://localhost:5173/siparis");
      
        cy.get('[data-cy="data-Ingredients"] input[type="checkbox"]').each((el, index) => {
          if (index < 12) {
            cy.wrap(el).check({ force: true });
          }
        });
      
        cy.get('[data-cy="data-Ingredients"] input[type="checkbox"]:checked').should("have.length", 10);
      });
  })

  describe("Toplam Tutar Güncelleniyor mu?", ()=>{
    it("Toplam tutar doğru hesaplanıyor mu?", () => {
        cy.visit("http://localhost:5173/siparis");
      
        cy.get('[data-cy="data-Ingredients"] input[type="checkbox"]').eq(0).check({ force: true });
        cy.get('[data-cy="data-Ingredients"] input[type="checkbox"]').eq(1).check({ force: true });
      
        cy.get('[data-cy="data-light-value"]').should("contain", "10.00");
        cy.get('[data-cy="data-red-value"]').should("contain", "95.50"); // 85.5 + 10
      });
  });

  describe("Quantity Artırma-Azaltma Çalışıyor mu?", ()=>{
    it("Adet butonları çalışıyor mu?", () => {
        cy.visit("http://localhost:5173/siparis");
      
        cy.get('[data-cy="data-piece"]').should("contain", "1");
        cy.get('[data-cy="data-btn-increase"]').click(); // Artır
        cy.get('[data-cy="data-piece"]').should("contain", "2");
        cy.get('[data-cy="data-btn-reduce"]').click(); // Azalt
        cy.get('[data-cy="data-piece"]').should("contain", "1");
      });
  })


  describe("Form Başarıyla Gönderme Testi", () => {
    it("Tüm alanlar doğru girildiğinde başarıyla yönlendirme yapar", () => {
      cy.visit("http://localhost:5173/siparis");
  
      cy.get('[data-cy="data-name-input"]').type("Gökhan Kocaoğlu");
      cy.get('[data-cy="data-size"] input[type="radio"]').first().check({ force: true });
      cy.get('[data-cy="data-dough"] select').select("Orta");
      cy.get('[data-cy="data-Ingredients"] input[type="checkbox"]').eq(0).check({ force: true });
      cy.get('[data-cy="data-Ingredients"] input[type="checkbox"]').eq(1).check({ force: true });
      cy.get('[data-cy="data-Ingredients"] input[type="checkbox"]').eq(2).check({ force: true });
      cy.get('[data-cy="data-Ingredients"] input[type="checkbox"]').eq(3).check({ force: true });
  
      cy.get('[data-cy="data-note"]').type("Bol peynirli olsun!");
      cy.get('[data-cy="data-submit"]').click();
      cy.url().should("include", "/success");
      cy.contains("SİPARİŞ ALINDI").should("exist");
    });
  });
  
  
  