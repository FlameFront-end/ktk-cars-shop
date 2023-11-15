import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

import './ProductCard.scss'

const ProductCard = ({ description, id, img, price, title }) => {
  return (
    <RouterLink to={`/${id}`}>
      <Card className="card">
        <CardMedia alt="img card" component="img" height="194" image={img} />
        <CardContent>
          <Typography component="div" gutterBottom variant="h6">
            {title}
          </Typography>
          <Typography color="text.secondary" variant="body2">
            {description}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography align="right" component="div" variant="h6">
            {price}
          </Typography>
        </CardContent>
      </Card>
    </RouterLink>
  )
}

export default ProductCard
