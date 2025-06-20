// src/__tests__/instructorFactory.test.ts
import { InstructorFactory } from "../instructorFactory";

describe('InstructorFactory', () => {
    it('deve criar um objeto Instructor válido', () => {
        const instructor = InstructorFactory.createInstructor(
            'João',
            'joao@example.com',
            5000,
            ['JavaScript', 'Python']
        );

        expect(instructor.name).toBe('João');
        expect(instructor.email).toBe('joao@example.com');
        expect(instructor.salary).toBe(5000);
        expect(instructor.expertise).toEqual(['JavaScript', 'Python']);
    });
});
