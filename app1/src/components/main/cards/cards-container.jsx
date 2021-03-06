import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getCards,
  removeCard,
  setCards,
} from '../../../redux/actions/cardsAction'
import { Card } from './Card'
import styles from './Cards-container.module.scss'
import { CardsCreationForm } from './Cards-creation-form'

const CardsContainer = () => {
  const cards = useSelector((state) => state.cards.cards)
  const dispatch = useDispatch()

  const [titleValue, setTitleValue] = useState('')
  const [genderValue, setGenderValue] = useState('male')
  const [ageValue, setAgeValue] = useState('')
  const [imageValue, setImageValue] = useState('')
  const [isFieldEmpty, setIsFieldEmpty] = useState(false)

  useEffect(() => {
    dispatch(getCards())
  }, [dispatch])

  const handleChangeTitle = (e) => {
    setTitleValue(e.target.value)
  }

  const handleChangeGender = (e) => {
    setGenderValue(e.target.value)
  }

  const handleChangeAge = (e) => {
    if (e.target.value >= 18 && e.target.value <= 100) {
      setAgeValue(e.target.value)
    }
  }

  const handleChangeImage = (e) => {
    setImageValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      titleValue !== '' &&
      genderValue !== '' &&
      ageValue !== '' &&
      imageValue !== ''
    ) {
      setIsFieldEmpty(false)
      const arrayId = cards.length !== 0 ? cards.map((item) => item.id) : [1]
      const newId = Math.max(...arrayId)
      const newCard = {
        id: newId + 1,
        age: ageValue,
        title: titleValue,
        imageUrl: imageValue,
        gender: genderValue,
      }
      dispatch(setCards([...cards, newCard]))
      setTitleValue('')
      setAgeValue('')
      setGenderValue('male')
      setImageValue('')
      return
    }
    setIsFieldEmpty(true)
  }

  const handleClick = (e) => {
    const selectedCard = e.target.closest('button')
    if (selectedCard && selectedCard.dataset.name === 'cross') {
      dispatch(removeCard(selectedCard.dataset.id))
      return
    }
  }

  if (!cards.length) {
    return (
      <section className={styles.content}>
        <div className="wrapper">
          <p className={styles.noCards}>No cards yet</p>
          <CardsCreationForm
            onSubmit={handleSubmit}
            handleSubmit={handleSubmit}
            handleChangeTitle={handleChangeTitle}
            handleChangeAge={handleChangeAge}
            handleChangeGender={handleChangeGender}
            handleChangeImage={handleChangeImage}
            titleValue={titleValue}
            genderValue={genderValue}
            ageValue={ageValue}
            imageValue={imageValue}
            isFieldEmpty={isFieldEmpty}
          />
        </div>
      </section>
    )
  }
  return (
    <section className={styles.content}>
      <div className="wrapper">
        <h2 className={styles.title}>HEROES</h2>
        <ul onClick={handleClick} className={styles.list}>
          {cards.map((card) => {
            return (
              <Card
                key={card.id}
                id={card.id}
                title={card.title}
                gender={card.gender}
                image={card.imageUrl}
                age={card.age}
              />
            )
          })}
        </ul>
        <CardsCreationForm
          onSubmit={handleSubmit}
          handleSubmit={handleSubmit}
          handleChangeTitle={handleChangeTitle}
          handleChangeAge={handleChangeAge}
          handleChangeGender={handleChangeGender}
          handleChangeImage={handleChangeImage}
          titleValue={titleValue}
          genderValue={genderValue}
          ageValue={ageValue}
          imageValue={imageValue}
          isFieldEmpty={isFieldEmpty}
        />
      </div>
    </section>
  )
}

export default CardsContainer
