import { IndexRouter } from './config/routes/index_router'
import { OrdersRouter } from './config/routes/orders_router'
import { SessionsRouter } from './config/routes/sessions_router'

app.use('/', IndexRouter)
app.use('/sessions', SessionsRouter)
app.use('/orders', OrdersRouter)
