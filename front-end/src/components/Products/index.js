import { useState } from "react";
import "./index.css";

const Products = () => {
  const [totals, setTotals] = useState({});

  const handleInputChange = (event, itemName, price) => {
    const quantity = parseInt(event.target.value);
    const totalItemValue = quantity * price;
    setTotals({ ...totals, [itemName]: totalItemValue });
  };

  const total = (itemName) => {
    return totals[itemName] ? totals[itemName] : 0;
  };

  return (
    <>
      <div className="table-container">
        <table id="tabOrder">
          <thead>
            <th className="table-head">CodeNo</th>
            <th className="table-head">Product Name</th>
            <th className="table-head">Quantity</th>
            <th className="table-head">Price</th>
            <th className="table-head">Total</th>
          </thead>
          <tbody>
            <tr className="prdt-group" id="pgroup" name="pgroup">
              <td colSpan="9">
                SPARKLERS
                <img
                  src="https://images.unsplash.com/photo-1627571527819-44dbac656b1b?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="heading-image"
                  alt="sparklers"
                />
              </td>
            </tr>
          </tbody>

          <tr id="Sparkles">
            <td>1</td>
            <td>07 Cm Electric</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "07 Cm Electric", 16)}
              />
            </td>
            <td>16</td>

            <td>{total("07 Cm Electric")}</td>
          </tr>

          <tr id="Sparkles">
            <td>2</td>
            <td>07 Cm Colour</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "07 Cm Colour", 20)}
              />
            </td>
            <td>20</td>

            <td>{total("07 Cm Colour")}</td>
          </tr>

          <tr id="Sparkles">
            <td>3</td>
            <td>10 Cm Electric</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "10 Cm Electric", 22)}
              />
            </td>
            <td>22</td>

            <td>{total("10 Cm Electric")}</td>
          </tr>

          <tr id="Sparkles">
            <td>4</td>
            <td>10 Cm Colour</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "10 Cm Colour", 26)}
              />
            </td>
            <td>26</td>

            <td>{total("10 Cm Colour")}</td>
          </tr>

          <tr id="Sparkles">
            <td>5</td>
            <td>15 Cm Electric</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "15 Cm Electric", 48)}
              />
            </td>
            <td>48</td>
            <td>{total("15 Cm Electric")}</td>
          </tr>

          <tr id="Sparkles">
            <td>6</td>
            <td>15 Cm Colour</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "15 Cm Colour", 52)}
              />
            </td>
            <td>52</td>

            <td>{total("15 Cm Colour")}</td>
          </tr>

          <tr id="Sparkles">
            <td>7</td>
            <td>30 Cm Electric</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "30 Cm Electric", 48)}
              />
            </td>
            <td>48</td>

            <td>{total("30 Cm Electric")}</td>
          </tr>

          <tr id="Sparkles">
            <td>8</td>
            <td>30 Cm Colour</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "30 Cm Colour", 52)}
              />
            </td>
            <td>52</td>

            <td>{total("30 Cm Colour")}</td>
          </tr>

          <tr className="prdt-group" id="pgroup" name="pgroup">
            <td colSpan="9">
              Walas
              <img
                src="https://images.jdmagicbox.com/rep/b2b/1000-wala-garland-cracker/1000-wala-garland-cracker-3.jpg"
                alt="walas"
                className="heading-image"
              />
            </td>
          </tr>

          <tr id="Walas">
            <td>9</td>
            <td>1000 Wala </td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "1000 Wala", 360)}
              />
            </td>
            <td>360</td>

            <td>{total("1000 Wala")}</td>
          </tr>

          <tr id="Walas">
            <td>10</td>
            <td>2000 Wala</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "2000 Wala", 720)}
              />
            </td>
            <td>720</td>

            <td>{total("2000 Wala")}</td>
          </tr>

          <tr id="Walas">
            <td>11</td>
            <td>5000 Wala</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "5000 Wala", 1800)}
              />
            </td>
            <td>1800</td>

            <td>{total("1800 Wala")}</td>
          </tr>

          <tr id="Walas">
            <td>12</td>
            <td>10000 Wala</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "10000 Wala", 360)}
              />
            </td>
            <td>360</td>

            <td>{total("10000 Wala")}</td>
          </tr>

          <tr id="Walas">
            <td>13</td>
            <td>100 Wala</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "100 Wala", 38)}
              />
            </td>
            <td>38</td>

            <td>{total("100 Wala")}</td>
          </tr>

          <tr className="prdt-group" id="pgroup" name="pgroup">
            <td colSpan="9">
              FLOWER POT BIG
              <img
                src="https://mycrackersshop.com/images/flowerpots.jpg"
                alt="flowepots"
                className="heading-image"
              />
            </td>
          </tr>

          <tr id="Flowerpots">
            <td>14</td>
            <td>Flower Pots Big</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "Flower Pots Big", 86)}
              />
            </td>
            <td>86</td>

            <td>{total("Flower Pots Big")}</td>
          </tr>

          <tr id="Flowerpots">
            <td>15</td>
            <td>Flower Pots Spl</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "Flower Pots Spl", 92)}
              />
            </td>
            <td>92</td>

            <td>{total("Flower Pots Spl")}</td>
          </tr>

          <tr id="Flowerpots">
            <td>16</td>
            <td>Flower Pots Ashok </td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "Flower Pots Ashok", 270)}
              />
            </td>
            <td>270</td>

            <td>{total("Flower Pots Ashok ")}</td>
          </tr>

          <tr id="Flowerpots">
            <td>17</td>
            <td>Colour Koti </td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "Colour Koti", 260)}
              />
            </td>
            <td>260</td>

            <td>{total("Colour Koti ")}</td>
          </tr>

          <tr id="Flowerpots">
            <td>18</td>
            <td>Koko/Tim </td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "Koko/Tim", 300)}
              />
            </td>
            <td>300</td>

            <td>{total("Koko/Tim ")}</td>
          </tr>

          <tr className="prdt-group" id="pgroup" name="pgroup">
            <td colSpan="9">
              BU CHAKKRAS
              <img
                src="https://aminus3.s3.amazonaws.com/image/g0014/u00013388/i00768498/1e8bff9225f87f5fac9cf3763939beae_large.jpg"
                alt="bhochakras"
                className="heading-image"
              />
            </td>
          </tr>

          <tr id="Chakkras">
            <td>19</td>
            <td>Chakkras Big </td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "Chakkras Big", 72)}
              />
            </td>
            <td>72</td>

            <td>{total("Chakkras Big")}</td>
          </tr>

          <tr id="Chakkras">
            <td>20</td>
            <td>Chakkras Spl </td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "Chakkras Spl", 110)}
              />
            </td>
            <td>110</td>

            <td>{total("Chakkras Spl")}</td>
          </tr>

          <tr className="prdt-group" id="pgroup" name="pgroup">
            <td colSpan="9">
              CHILDRENS
              <img
                src="https://i.ytimg.com/vi/F3qlGzHQ9Zg/maxresdefault.jpg"
                alt="childrens-crackers"
                className="heading-image"
              />
            </td>
          </tr>
          <tr id="Childrens">
            <td>21</td>
            <td>10Cm Pencil </td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "10Cm Pencil", 44)}
              />
            </td>
            <td>44</td>

            <td>{total("10Cm Pencil")}</td>
          </tr>
          <tr id="Childrens">
            <td>22</td>
            <td>12Cm Pencil </td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "12Cm Pencil", 48)}
              />
            </td>
            <td>48</td>

            <td>{total("12Cm Pencil")}</td>
          </tr>

          <tr id="Childrens">
            <td>23</td>
            <td>4 Twinling Star</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "4 Twingling Star", 70)}
              />
            </td>
            <td>70</td>

            <td>{total("4 Twingling Star")}</td>
          </tr>

          <tr id="Childrens">
            <td>24</td>
            <td>1-1/2' Twinling Star</td>
            <td>
              <input
                type="number"
                onChange={(e) =>
                  handleInputChange(e, "1-1/2' Twingling Star", 40)
                }
              />
            </td>
            <td>40</td>

            <td>{total("1-1/2' Twingling Star")}</td>
          </tr>

          <tr id="Childrens">
            <td>25</td>
            <td>Mercury Torce</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "Mercury Torce", 110)}
              />
            </td>
            <td>110</td>

            <td>{total("Mercury Torce")}</td>
          </tr>

          <tr id="Childrens">
            <td>26</td>
            <td>Helicopter</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "Helicopter", 130)}
              />
            </td>
            <td>130</td>

            <td>{total("Helicopter")}</td>
          </tr>

          <tr id="Childrens">
            <td>27</td>
            <td>Photo Flash</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "Photo Flash", 90)}
              />
            </td>
            <td>90</td>

            <td>{total("Photo Flash")}</td>
          </tr>

          <tr id="Childrens">
            <td>28</td>
            <td>KitKat</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "KitKat", 46)}
              />
            </td>
            <td>46</td>

            <td>{total("KitKat")}</td>
          </tr>

          <tr id="Childrens">
            <td>29</td>
            <td>Poppop</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "Poppop", 10)}
              />
            </td>
            <td>10</td>

            <td>{total("Poppop")}</td>
          </tr>

          <tr id="Childrens">
            <td>30</td>
            <td>MatchSticks Throw</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "MatchSticks Throw", 25)}
              />
            </td>
            <td>25</td>

            <td>{total("MatchSticks Throw")}</td>
          </tr>

          <tr id="Childrens">
            <td>31</td>
            <td>Magic Cracking</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "Magic Cracking", 25)}
              />
            </td>
            <td>25</td>

            <td>{total("Magic Cracking")}</td>
          </tr>

          <tr className="prdt-group" id="pgroup" name="pgroup">
            <td colSpan="9">
              GUNS
              <img
                src="https://grovuj.com/wp-content/uploads/2021/09/WhatsApp-Image-2021-09-11-at-3.30.26-PM-10.jpeg"
                alt="guns"
                className="heading-image"
              />
            </td>
          </tr>

          <tr id="Guns">
            <td>32</td>
            <td>B4</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "B4", 30)}
              />
            </td>
            <td>30</td>

            <td>{total("B4")}</td>
          </tr>

          <tr id="Guns">
            <td>33</td>
            <td>K22 col</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "K22 col", 40)}
              />
            </td>
            <td>40</td>

            <td>{total("K22 col")}</td>
          </tr>

          <tr id="Guns">
            <td>34</td>
            <td>M50 black</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "M50 black", 40)}
              />
            </td>
            <td>40</td>

            <td>{total("M50 black")}</td>
          </tr>

          <tr id="Guns">
            <td>35</td>
            <td>Ring Cap</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "Ring Cap", 15)}
              />
            </td>
            <td>15</td>

            <td>{total("Ring Cap")}</td>
          </tr>

          <tr className="prdt-group" id="pgroup" name="pgroup">
            <td colSpan="9">
              SHOTS
              <img
                src="https://img3.exportersindia.com/product_images/bc-full/2022/8/4735179/multi-colors-sky-shots-cracker-1659595292-6476993.jpeg"
                alt="shots"
                className="heading-image"
              />
            </td>
          </tr>

          <tr id="Shots">
            <td>35</td>
            <td>15 Shots</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "15 Shots", 260)}
              />
            </td>
            <td>260</td>

            <td>{total("15 Shots")}</td>
          </tr>

          <tr id="Shots">
            <td>36</td>
            <td>30 Shots</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "30 Shots", 520)}
              />
            </td>
            <td>520</td>

            <td>{total("30 Shots")}</td>
          </tr>
          <tr id="Shots">
            <td>37</td>
            <td>60 Shots</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "60 Shots", 1040)}
              />
            </td>
            <td>1040</td>

            <td>{total("60 Shots")}</td>
          </tr>

          <tr id="Shots">
            <td>38</td>
            <td>120 Shots</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "120 Shots", 2080)}
              />
            </td>
            <td>2080</td>

            <td>{total("120 Shots")}</td>
          </tr>

          <tr id="Shots">
            <td>39</td>
            <td>240 Shots</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "240 Shots", 4160)}
              />
            </td>
            <td>4160</td>

            <td>{total("240 Shots")}</td>
          </tr>

          <tr className="prdt-group" id="pgroup" name="pgroup">
            <td colSpan="9">
              GIFTS
              <img
                src="https://m.media-amazon.com/images/I/91co0hB7D9L.jpg"
                className="heading-image"
                alt="gifts"
              />
            </td>
          </tr>

          <tr id="Gifts">
            <td>40</td>
            <td>Gift Parcel 12 Items</td>
            <td>
              <input
                type="number"
                onChange={(e) =>
                  handleInputChange(e, "Gift Parcel 12 Items", 240)
                }
              />
            </td>
            <td>240</td>

            <td>{total("Gift Parcel 12 Items")}</td>
          </tr>

          <tr id="Gifts">
            <td>41</td>
            <td>Gift Parcel 20 Items</td>
            <td>
              <input
                type="number"
                onChange={(e) =>
                  handleInputChange(e, "Gift Parcel 20 Items", 400)
                }
              />
            </td>
            <td>400</td>

            <td>{total("Gift Parcel 20 Items")}</td>
          </tr>
          <tr id="Gifts">
            <td>42</td>
            <td>Gift Parcel 45 Items</td>
            <td>
              <input
                type="number"
                onChange={(e) =>
                  handleInputChange(e, "Gift Parcel 45 Items", 2000)
                }
              />
            </td>
            <td>2000</td>

            <td>{total("Gift Parcel 45 Items")}</td>
          </tr>

          <tr id="Gifts">
            <td>43</td>
            <td>Gift Parcel VIP</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "Gift Parcel VIP", 2400)}
              />
            </td>
            <td>2400</td>

            <td>{total("Gift Parcel VIP")}</td>
          </tr>

          <tr className="prdt-group" id="pgroup" name="pgroup">
            <td colSpan="9">
              ROCKETS/COMMENTS
              <img
                src="https://www.fireworks2home.com/wp-content/uploads/2020/10/rocket-fireworks2home.com_.jpg"
                alt="rockets"
                className="heading-image"
              />
            </td>
          </tr>

          <tr id="r/c">
            <td>44</td>
            <td>2' Pipe</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "2' Pipe", 120)}
              />
            </td>
            <td>120</td>

            <td>{total("2'Pipe")}</td>
          </tr>

          <tr id="r/c">
            <td>45</td>
            <td>3 Pieces 2' Pipe</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "3 Pieces 2' Pipe", 340)}
              />
            </td>
            <td>340</td>

            <td>{total("3 Pieces 2'Pipe")}</td>
          </tr>

          <tr id="r/c">
            <td>46</td>
            <td>3-1/2' Pipe</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "3-1/2' Pipe", 0)}
              />
            </td>
            <td>320</td>

            <td>{total("3-12'Pipe")}</td>
          </tr>

          <tr id="r/c">
            <td>47</td>
            <td>4' Double Ball</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "4' Double Ball", 550)}
              />
            </td>
            <td>550</td>

            <td>{total("4' Double Ball")}</td>
          </tr>

          <tr id="r/c">
            <td>48</td>
            <td>Bullet Bomb</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "Bullet Bomb", 80)}
              />
            </td>
            <td>80</td>

            <td>{total("Bullet Bomb")}</td>
          </tr>

          <tr id="r/c">
            <td>49</td>
            <td>Rocket Bombs</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "Rocket Bombs", 120)}
              />
            </td>
            <td>120</td>

            <td>{total("Rocket Bombs")}</td>
          </tr>

          <tr id="r/c">
            <td>50</td>
            <td>Rocket 2 Sound</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "Rocket 2 Sound", 180)}
              />
            </td>
            <td>180</td>

            <td>{total("Rocket 2 Sound")}</td>
          </tr>

          <tr id="r/c">
            <td>51</td>
            <td>Rocket 3 Sound</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "Rocket 3 Sound", 200)}
              />
            </td>
            <td>200</td>

            <td>{total("Rocket 3 Sound")}</td>
          </tr>

          <tr id="r/c">
            <td>52</td>
            <td>Rocket Bomb</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "Rocket Bomb", 80)}
              />
            </td>
            <td>80</td>

            <td>{total("Rocket Bomb")}</td>
          </tr>

          <tr className="prdt-group" id="pgroup" name="pgroup">
            <td colSpan="9">
              BOMBS
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNnIxx8w5fFfpcaltbeU_XfoVGEoJlivgwYQ&usqp=CAU"
                alt="bombs"
                className="heading-image"
              />
            </td>
          </tr>

          <tr id="bombs">
            <td>53</td>
            <td>Red Bijili 100 Pcs</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "Red Bijili 100 Pcs", 38)}
              />
            </td>
            <td>38</td>

            <td>{total("Red Bijili 100 Pcs")}</td>
          </tr>

          <tr id="bombs">
            <td>54</td>
            <td>28 Chorsa</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "28 Chorsa", 16)}
              />
            </td>
            <td>16</td>

            <td>{total("28 Chorsa")}</td>
          </tr>

          <tr id="bombs">
            <td>55</td>
            <td>28 Gaint</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "28 Gaint", 26)}
              />
            </td>
            <td>26</td>

            <td>{total("28 Gaint")}</td>
          </tr>

          <tr id="bombs">
            <td>56</td>
            <td>Bird</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "Bird", 20)}
              />
            </td>
            <td>20</td>

            <td>{total("Bird")}</td>
          </tr>

          <tr id="bombs">
            <td>57</td>
            <td>3.1/2 Laxmi</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "3.1/2 Laxmi", 35)}
              />
            </td>
            <td>35</td>

            <td>{total("3.1/2 Laxmi")}</td>
          </tr>

          <tr id="bombs">
            <td>58</td>
            <td>4' Laxmi</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "4' Laxmi", 45)}
              />
            </td>
            <td>45</td>

            <td>{total("4' Laxmi")}</td>
          </tr>

          <tr id="bombs">
            <td>59</td>
            <td>Hulk</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "Hulk", 36)}
              />
            </td>
            <td>36</td>

            <td>{total("Hulk")}</td>
          </tr>

          <tr id="bombs">
            <td>60</td>
            <td>Wariyar</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "Wariyar", 36)}
              />
            </td>
            <td>36</td>

            <td>{total("Wariyar")}</td>
          </tr>

          <tr id="bombs">
            <td>61</td>
            <td>Tiger Bomb</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "Tiger Bomb", 130)}
              />
            </td>
            <td>130</td>

            <td>{total("Tiger Bomb")}</td>
          </tr>

          <tr id="bombs">
            <td>62</td>
            <td>Digital Bomb</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "Digital Bomb", 300)}
              />
            </td>
            <td>300</td>

            <td>{total("Digital Bomb")}</td>
          </tr>

          <tr id="bombs">
            <td>63</td>
            <td>Hydro Bomb</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "Hydro Bomb", 76)}
              />
            </td>
            <td>76</td>

            <td>{total("Hydro Bomb")}</td>
          </tr>

          <tr className="prdt-group" id="pgroup" name="pgroup">
            <td colSpan="9">
              FANCY
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9DwCdcK9JLFFPzIxnHQ-yafjiDelHStE2vg&usqp=CAU"
                alt="fancy"
                className="heading-image"
              />
            </td>
          </tr>
          <tr id="fancy">
            <td>64</td>
            <td>Chotta Fancy</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "Chotta Fancy", 60)}
              />
            </td>
            <td>60</td>

            <td>{total("Chotta Fancy")}</td>
          </tr>

          <tr id="fancy">
            <td>65</td>
            <td>Money Bang</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "Money Bang", 360)}
              />
            </td>
            <td>360</td>

            <td>{total("Money Bang")}</td>
          </tr>

          <tr id="fancy">
            <td>66</td>
            <td>Peacock Small</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "Peacock Small", 330)}
              />
            </td>
            <td>330</td>

            <td>{total("Peacock Small")}</td>
          </tr>

          <tr id="fancy">
            <td>67</td>
            <td>Peacock Big</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "Peacock Big", 480)}
              />
            </td>
            <td>480</td>

            <td>{total("Peacock Big")}</td>
          </tr>

          <tr id="fancy">
            <td>68</td>
            <td>Kinder Joy</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "Kinder Joy", 210)}
              />
            </td>
            <td>210</td>

            <td>{total("Kinder Joy")}</td>
          </tr>

          <tr id="fancy">
            <td>69</td>
            <td>Star King</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "Star King", 180)}
              />
            </td>
            <td>180</td>

            <td>{total("Star King")}</td>
          </tr>

          <tr id="fancy">
            <td>70</td>
            <td>Disco Shower</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "Disco Shower", 130)}
              />
            </td>
            <td>130</td>

            <td>{total("Disco Shower")}</td>
          </tr>

          <tr id="fancy">
            <td>71</td>
            <td>Bambaram</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "Bambaram", 130)}
              />
            </td>
            <td>130</td>

            <td>{total("Bambaram")}</td>
          </tr>

          <tr id="fancy">
            <td>72</td>
            <td>7 Step</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "7 Step", 600)}
              />
            </td>
            <td>600</td>

            <td>{total("7 Step")}</td>
          </tr>

          <tr id="fancy">
            <td>73</td>
            <td>Water Shower</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "Water Shower", 220)}
              />
            </td>
            <td>220</td>

            <td>{total("Water Shower")}</td>
          </tr>

          <tr id="fancy">
            <td>74</td>
            <td>Singing Pop</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "Singing Pop", 220)}
              />
            </td>
            <td>220</td>

            <td>{total("Singing Pop")}</td>
          </tr>

          <tr id="fancy">
            <td>75</td>
            <td>Tin Beer</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "Tin Beer", 120)}
              />
            </td>
            <td>120</td>

            <td>{total("Tin Beer")}</td>
          </tr>

          <tr id="fancy">
            <td>76</td>
            <td>Fountain</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "Fountain", 110)}
              />
            </td>
            <td>110</td>

            <td>{total("Tin Beer")}</td>
          </tr>

          <tr id="fancy">
            <td>77</td>
            <td>Silky</td>
            <td>
              <input
                type="number"
                onChange={(e) => handleInputChange(e, "Silky", 60)}
              />
            </td>
            <td>60</td>

            <td>{total("Silky")}</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Products;
