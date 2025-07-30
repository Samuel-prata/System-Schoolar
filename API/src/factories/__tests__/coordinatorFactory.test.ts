import { CoordinatorFactory } from "../coordinatorFactory";
import { Coordinator } from "../../models/coordinatorModel";

describe('CoordinaorFactory', () => {
    it('Deve criar um objeto Coordinator valido', () => {
        const coordinator = CoordinatorFactory.createCoordinator(
            'Samuel',
            'samuel@test.com',
            2500,
            new Date(),
            'Education',
            2,
            ['IA', 'Back-end']
        )
        expect(coordinator.name).toBe('Samuel')
    })
})