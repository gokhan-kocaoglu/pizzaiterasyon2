import "../styles/Order.css";
import Header from "../components/Header";
import React, { useState, useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import NameInput from "../components/NameInput";
import SizeSelector from "../components/SizeSelector";
import DoughSelector from "../components/DoughSelector";
import IngredientsSelector from "../components/IngredientsSelector";
import NoteInput from "../components/NoteInput";
import SubmitButton from "../components/SubmitButton";
import QuantityControl from "../components/QuantityControl";
import Footer from "../components/Footer";

const BASE_PRICE = 85.5;
const EXTRA_TOPPING_PRICE = 5;
const MAX_TOPPINGS = 10;

const toppingsList = [
  "Pepperoni",
  "Sosis",
  "Kanada Jambonu",
  "Tavuk Izgara",
  "Soğan",
  "Domates",
  "Mısır",
  "Sucuk",
  "Jalepeno",
  "Sarımsak",
  "Biber",
  "Ananas",
  "Kabak",
];

const OrderPage = () => {
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [dough, setDough] = useState("");
  const [toppings, setToppings] = useState([]);
  const [note, setNote] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const history = useHistory();

  const handleToppingChange = (topping) => {
    if (toppings.includes(topping)) {
      setToppings(toppings.filter((t) => t !== topping));
    } else if (toppings.length < MAX_TOPPINGS) {
      setToppings([...toppings, topping]);
    }
  };

  const totalExtras = toppings.length * EXTRA_TOPPING_PRICE;
  const total = (BASE_PRICE + totalExtras) * quantity;

  const validateForm = () => {
    const newErrors = {};
    if (name.trim().length < 3)
      newErrors.name = "İsim en az 3 karakter olmalı.";
    if (!size) newErrors.size = "Lütfen boyut seçiniz.";
    if (!dough) newErrors.dough = "Lütfen hamur seçiniz.";
    if (toppings.length > 0 && toppings.length < 4)
      newErrors.toppings = "En az 4 malzeme seçmelisiniz.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isFormValid = useMemo(() => {
    return name.trim().length >= 3 && size && dough && toppings.length >= 4;
  }, [name, size, dough, toppings]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
    }
  };

  useEffect(() => {
    if (isSubmitting) {
      const orderData = {
        isim: name,
        boyut: size,
        hamur: dough,
        malzemeler: toppings,
        not: note,
        adet: quantity,
        toplamTutar: total.toFixed(2),
      };

      axios
        .post("https://reqres.in/api/pizza", orderData)
        .then((response) => {
          console.log("Sipariş başarıyla gönderildi:", response.data);

          setName("");
          setSize("");
          setDough("");
          setToppings([]);
          setNote("");
          setQuantity(1);
          setErrors({});
          setIsSubmitting(false);

          history.push("/success", response.data);
        })
        .catch((error) => {
          console.error("Sipariş gönderme hatası:", error);
          alert("Sipariş gönderilemedi. Lütfen tekrar deneyin.");
          setIsSubmitting(false);
        });
    }
  }, [isSubmitting, isFormValid]);

  return (
    <>
      <Header />
      <div className="title-grid">
        <div className="title-div">
          <img
            className="title-div-img"
            src="../images/iteration-2-images/pictures/form-banner.png"
            alt="pizza"
          />
          <p className="header-subtitle">
            <span>Anasayfa</span> - <strong>Sipariş Oluştur</strong>
          </p>
          <h2 data-cy="data-header">Position Absolute Acı Pizza</h2>
          <div className="price-rating">
            <span className="price">{BASE_PRICE.toFixed(2)}₺</span>
            <span className="rating">4.9 ⭐ (200)</span>
          </div>
          <p className="description">
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta
            denir.
          </p>
        </div>
      </div>

      <form className="order-container" onSubmit={handleSubmit} noValidate>
        <div className="size-dough-wrapper">
          <div className="option-group">
            <SizeSelector
              label="Boyut Seç"
              name="size"
              options={["S", "M", "L"]}
              selected={size}
              onChange={setSize}
            />
            {errors.size && <p className="error">{errors.size}</p>}
          </div>
          <div className="option-group">
            <DoughSelector
              label="Hamur Kalınlığı"
              value={dough}
              onChange={(e) => setDough(e.target.value)}
              options={["İnce", "Orta", "Kalın"]}
            />
            {errors.dough && <p className="error">{errors.dough}</p>}
          </div>
        </div>

        <IngredientsSelector
          label="Ek Malzemeler"
          items={toppingsList}
          selectedItems={toppings}
          onChange={handleToppingChange}
          max={MAX_TOPPINGS}
        />
        {errors.toppings && <p className="error">{errors.toppings}</p>}
        <NameInput
          label="İsim"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={errors.name}
        />
        <NoteInput
          label="Sipariş Notu"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Siparişine eklemek istediğin bir not var mı?"
        />
        <hr className="line" />
        <div className="order-footer">
          <QuantityControl quantity={quantity} setQuantity={setQuantity} />
          <div className="summary">
            <p className="p-title">
              <strong>Sipariş Toplamı</strong>
            </p>
            <div className="summary-row">
              <span className="label">Seçimler</span>
              <span data-cy="data-light-value" className="light-value">
                {totalExtras.toFixed(2)}₺
              </span>
            </div>

            <div className="summary-row">
              <span className="red-label">Toplam</span>
              <span data-cy="data-red-value" className="red-value">
                {total.toFixed(2)}₺
              </span>
            </div>
            <SubmitButton disabled={isSubmitting} />
          </div>
        </div>
      </form>
      <Footer></Footer>
    </>
  );
};

export default OrderPage;
