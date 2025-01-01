import db from '../services/data_base.ts';
import { User } from './interfaces.ts';


const seedData = async () => {
    const data: User[] = [
        {
            email: 'email1',
            password: "password1"
        },
        {
            email: 'email2',
            password: "password2"
        },
        {
            email: 'email3',
            password: "password3"
        }

    ];

    try {
        await db.connect();

        for (const user of data) {
            const existing = await db.getFilteredItems('users', { email: user.email });
            if (existing.length === 0) {
                await db.addItem('users', user);
            }
        }
        console.log('Seed data inserted successfully');
    } catch (error) {
        console.error('Error seeding data:', error);
    } finally {
        await db.disconnect();
    }
};

seedData();

